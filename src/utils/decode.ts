import fs from "fs";
function decode(PathOrFileDescriptor: string): string {
  try {
    const path: string = PathOrFileDescriptor.toString();
    const buffer = fs.readFileSync(path);
    const token = buffer.toString("utf8");
    return token.trim();
  } catch (error) {
    throw new Error("Invalid Secret Token!");
  }
}
export default decode;
