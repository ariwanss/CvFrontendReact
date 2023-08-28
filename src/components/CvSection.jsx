import styles from "./CvSection.module.css"
import { useSelector } from "react-redux"
import { selectItemsBySection } from "../features/cv/cvSlice"
import CvItem from "./CvItem"

const CvSection = ({ section }) => {
  const cvItems = useSelector(state => selectItemsBySection(state, section))
  return (
    <div className={styles.container}>
      <p className={styles.title}>{section}</p>
      <ul className={styles.items}>
        {cvItems.map((item) => <li><CvItem {...item}/></li>)}
      </ul>
    </div>
  )
}

export default CvSection