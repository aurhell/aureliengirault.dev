type LinkProps = {
  url: string
  style?: string
  children: React.ReactNode
}

export default function Link({ url, style, children }: LinkProps) {
  return <a href={url} className={style}>{children}</a>
}
