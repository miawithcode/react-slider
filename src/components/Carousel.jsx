import { useState } from "react"
import { shortList, list, longlist } from "../data"

const Carousel = () => {
  const [people, setPeople] = useState(shortList);

  return (
    <section className="slider-container">
      {people.map((person) => {
        const {id, image, name, title, quote} = person;
        return <article className="slide" key={id}></article>
      })}
    </section>
  )
}
export default Carousel