import { useState } from "react"
import styles from "./CvForm.module.css"

const initState = {
  section: "",
  title: "",
  yearStart: "",
  yearEnd: "",
  link: "",
  descriptions: [],
}

const CvForm = () => {
  const [form, setForm] = useState({
    section: "",
    title: "",
    yearStart: "",
    yearEnd: "",
    link: "",
    descriptions: [],
  })

  const [description, setDescription] = useState("")
  const [sectionOptions, setSectionOptions] = useState([])

  const { section, title, yearStart, yearEnd, link, descriptions } = form

  const handleFormChange = (e) => {
    setForm((prev) => {
      if (e.target.name == "section") {
        return { ...prev, [e.target.name]: e.target.value.toLowerCase() }
      }
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleDescChange = (e) => {
    setDescription(e.target.value)
  }

  const addDescription = () => {
    setForm((prev) => ({
      ...prev,
      descriptions: description ? [...prev.descriptions, description] : [...prev.descriptions],
    }))
    setDescription("")
  }

  const deleteDescItem = (index) => {
    setForm((prev) => ({
      ...prev,
      descriptions: [...prev.descriptions.slice(0, index), ...prev.descriptions.slice(index + 1)]
    }))
  }

  const submit = () => {
    const prepared = { ...form, descriptions: description ? [...descriptions, description] : [...descriptions] }
    console.log(prepared)
    const whitespaceRemoved = Object.entries(prepared).map(([k, v]) => {
      if (typeof v == "string") {
        return [k, v.trim()]
      }
      return [k, v.map((item) => item.trim())]
    })
    console.log(whitespaceRemoved)
    const body = {}
    whitespaceRemoved.forEach(([k, v]) => body[k] = v)
    fetch("http://localhost:3030/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).catch((error) => alert(error))
    setSectionOptions((prev) => [...new Set([...prev, section])])
    setForm({ ...initState })
    setDescription("")
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div>
          <input type="text" list="sections" name="section" id="section" placeholder="section" value={section} onChange={handleFormChange} />
          <datalist id="sections">
            {
              sectionOptions.map((item) => <option value={item}>{item}</option>)
            }
          </datalist>
        </div>
        <div>
          <input type="text" name="title" id="title" placeholder="title" value={title} onChange={handleFormChange} />
        </div>
        <div>
          <input type="text" name="yearStart" id="yearStart" placeholder="yearStart" value={yearStart} onChange={handleFormChange} />
        </div>
        <div>
          <input type="text" name="yearEnd" id="yearEnd" placeholder="yearEnd" value={yearEnd} onChange={handleFormChange} />
        </div>
        <div>
          <input type="text" name="link" id="link" placeholder="link" value={link} onChange={handleFormChange} />
        </div>
        {
          descriptions.length == 0 ? "" : descriptions.length > 1 ?
            <ul className={styles.descList}>
              {
                descriptions.map(
                  (item, index) =>
                    <li key={index}>
                      <div className={styles.descItemCont}>
                        <p>{item}</p>
                        <button onClick={() => deleteDescItem(index)}>DELETE</button>
                      </div>
                    </li>
                )
              }
            </ul> :
            <div className={styles.descItemCont}>
              <p>{descriptions[0]}</p>
              <button onClick={() => deleteDescItem(0)}>DELETE</button>
            </div>
        }
        <div>
          <input type="text" name="description" id="description" placeholder="description" value={description} onChange={handleDescChange} />
        </div>
        <div>
          <input type="button" value="add description" onClick={addDescription} />
        </div>
        <div>
          <input type="button" value="add cv item" onClick={submit} />
        </div>
        <div>
          <input type="button" value="reset" onClick={() => setForm({ ...initState })} />
        </div>
      </form>
    </div>
  )
}

export default CvForm