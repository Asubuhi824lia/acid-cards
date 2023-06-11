
import styles from './Article.module.css'

const FormArticle = () => {
    const url = window.location.href

    let elem = url.split('/').pop()

    return (
        <div>
            <h1>{elem}</h1>
            <section></section>
        </div >)
}

export default FormArticle;