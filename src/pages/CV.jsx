import CvSection from "../components/CvSection";
import CvItem from "../components/CvItem";

const ciProps = {
  title: "freeCodeCamp.org Front End Development Libraries Certification",
  yearEnd: 2022,
  yearStart: 2021,
  link: "https://freecodecamp.org/certification/ariwanss/front-end-development-libraries",
  descriptions: [
    "Built five projects to demonstrate understanding of front-end technologies such as HTML, CSS, JavaScript, and React",
    "Projects: Random Quote Machine, Markdown Previewer, Drum Machine, JavaScript Calculator, 25 + 5 Clock"
  ]
}

const CV = () => {
  return (
    <div>
      <CvSection section={"coursework"} />
    </div>
  )
}

export default CV