import {
  Javascript,
  Rust,
  Typescript,
  NodeJs,
  Elasticsearch,
  IconProps,
} from '@/components/Icons'

export const TagTitles: { [key: string]: string } = {
  ramda: 'Ramda',
  divideconquer: 'Divide & Conquer',
  sorting: 'Sorting',
  tricks: 'Tricks',
}

export const TopicIcons: { [key: string]: (props: IconProps) => JSX.Element } =
  {
    rust: Rust,
    javascript: Javascript,
    typescript: Typescript,
    nodejs: NodeJs,
    elasticsearch: Elasticsearch,
  }
