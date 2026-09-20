import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FeaturedArticleProps } from "../../../types";
import { StrapiImage } from "./StrapiImage";

export function FeaturedArticle({ headline, excerpt, link, image }: Readonly<FeaturedArticleProps>) {
  return (
    <article className="featured-article container">
      <div className="featured-article__info">
        <h3>{headline}</h3>
        <div className="copy">
          <ReactMarkdown>{excerpt}</ReactMarkdown>
          <Link href={link.href} className="btn btn--turquoise btn--medium">
            {link.text}
          </Link>
        </div>
      </div>
      <StrapiImage src={image.url} alt={image.alternativeText || "No alternative text"} width={200} height={200} />
    </article>
  );
}
