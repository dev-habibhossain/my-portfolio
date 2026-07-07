import SpecRow from "@/components/SpecRow";
import { reviews } from "@/data/reviews";
import { counts } from "@/data/nav";

// Initials for the small avatar chip (no photos needed for testimonials).
function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function Reviews({ full = false }) {
  return (
    <SpecRow id="reviews" label="Reviews" count={full ? null : counts.reviews}>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <figure className="review-card" key={review.name}>
            <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
            <figcaption className="r-author">
              <span className="r-avatar" aria-hidden="true">
                {initials(review.name)}
              </span>
              <span>
                <span className="r-name">{review.name}</span>
                <span className="r-role" style={{ display: "block" }}>
                  {review.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SpecRow>
  );
}
