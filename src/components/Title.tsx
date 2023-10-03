import { ITitle } from '@/utils/interfaces'

export default function Title({ text }: ITitle) {
  return <h1 className="text-darkCyan">{text}</h1>
}
