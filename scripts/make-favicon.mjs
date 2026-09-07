// One-off: build a favicon.ico (PNG-encoded, 32x32 + 16x16) from the logo.
// Uses sharp (already installed). ICO can embed PNG images directly.
import sharp from 'sharp'
import { writeFileSync } from 'fs'

const SRC = 'public/static/images/logo-header.png'
const OUT = 'public/static/favicons/favicon.ico'

const sizes = [16, 32, 48]

const pngs = await Promise.all(
  sizes.map((s) =>
    sharp(SRC).resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
  )
)

// Build ICO container (ICONDIR + ICONDIRENTRY[] + PNG data)
const count = pngs.length
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(count, 4)

const entries = []
let offset = 6 + count * 16
for (let i = 0; i < count; i++) {
  const entry = Buffer.alloc(16)
  const dim = sizes[i] >= 256 ? 0 : sizes[i]
  entry.writeUInt8(dim, 0) // width
  entry.writeUInt8(dim, 1) // height
  entry.writeUInt8(0, 2) // palette
  entry.writeUInt8(0, 3) // reserved
  entry.writeUInt16LE(1, 4) // color planes
  entry.writeUInt16LE(32, 6) // bits per pixel
  entry.writeUInt32LE(pngs[i].length, 8) // data size
  entry.writeUInt32LE(offset, 12) // data offset
  entries.push(entry)
  offset += pngs[i].length
}

const ico = Buffer.concat([header, ...entries, ...pngs])
writeFileSync(OUT, ico)
console.log(`Wrote ${OUT} (${ico.length} bytes, sizes: ${sizes.join(', ')})`)
