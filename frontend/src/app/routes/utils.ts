import {Path} from './path'
export const withoutSlug = (path: Path) => path.split('/')[0]
