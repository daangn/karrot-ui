export const BLOG_QUERY = `*[_type == "blog"] {
  title,
  description,
  thumbnail,
  slug,
  publishedAt,
}`;

export const SINGLE_BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0] {
  title,
  description,
  thumbnail,
  slug,
  publishedAt,
  content,
  "toc": content[style in ["h1", "h2", "h3"]]
}`;

export const GUIDELINE_QUERY = `*[_type == "guideline" && path == $path][0] {
  title,
  content,
  publishedAt,
  "toc": content[style in ["h1", "h2", "h3"]]
}`;
