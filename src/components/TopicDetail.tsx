import ImageTile from './ImageTile'

const TopicDetail = ({ topic }: { topic: TopicWithGroupAndSnippets }) => {
  return (
    <section id={`${topic.id}-topic`} className="scroll-mt-28">
      <h2 className="font-display text-2xl font-bold text-slate-900">
        {topic.title}
      </h2>
      <p className="text-sm leading-7 text-slate-500">{topic.subtitle}</p>
      <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
        {topic.groups.map((group) => (
          <section
            key={`${group.id}-group`}
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900">
              {group.title}
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              {group.snippets.map((snippet) => (
                <ImageTile
                  key={snippet.slug}
                  title={snippet.title}
                  date={snippet.date}
                  image={group.source}
                  href={`/snippets/${snippet.slug}`}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

export default TopicDetail
