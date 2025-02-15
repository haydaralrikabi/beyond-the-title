import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SubstackPost {
  id: string;
  title: string;
  link: string;
  publishDate: string;
  content: string;
}

export const Insights: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubstackPosts = async () => {
      try {
        const response = await fetch(
          "https://haydaralrikabi.substack.com/feed"
        );
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const items = xml.querySelectorAll("item");

        const fetchedPosts = Array.from(items)
          .map((item) => {
            // Check if this is an audio/podcast post
            const enclosure = item.querySelector("enclosure");
            const isAudioPost =
              enclosure?.getAttribute("type") === "audio/mpeg";

            // Skip this post if it's an audio post
            if (isAudioPost) {
              return null;
            }

            const content =
              item.querySelector("content\\:encoded")?.textContent ||
              item.querySelector("encoded")?.textContent ||
              item.getElementsByTagNameNS(
                "http://purl.org/rss/1.0/modules/content/",
                "encoded"
              )[0]?.textContent ||
              "";

            return {
              id: item.querySelector("guid")?.textContent || "",
              title: item.querySelector("title")?.textContent || "",
              link: item.querySelector("link")?.textContent || "",
              publishDate: new Date(
                item.querySelector("pubDate")?.textContent || ""
              ).toLocaleDateString(),
              content: content,
            };
          })
          .filter((post): post is SubstackPost => post !== null)
          .slice(0, 5);

        setPosts(fetchedPosts);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubstackPosts();
  }, []);

  if (loading || posts.length === 0) {
    return null;
  }

  const nextPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-black" id="insights">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Blog Insights
          </h2>
          <p className="text-xl text-gray-400">Read and enjoy</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Blog Post Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300">
            <div className="p-8">
              <div className="text-sm text-blue-400 mb-4">
                {posts[currentIndex].publishDate}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {posts[currentIndex].title}
              </h3>
              <div
                className="text-gray-400 mb-6 leading-relaxed prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html:
                    posts[currentIndex].content
                      .split(" ")
                      .slice(0, 50)
                      .join(" ") + "...",
                }}
              />
              <a
                href={posts[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read More
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          {posts.length > 1 && (
            <>
              <button
                onClick={previousPost}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-gray-800/80 hover:bg-gray-700 p-2 rounded-full text-white transition-all"
                aria-label="Previous post"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPost}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gray-800/80 hover:bg-gray-700 p-2 rounded-full text-white transition-all"
                aria-label="Next post"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Navigation Dots */}
          {posts.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-600"
                  }`}
                  aria-label={`Go to post ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
