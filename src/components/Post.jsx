import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/borgesds.png" />

                    <div className={styles.authorInfo}>
                        <strong>André Fonseca Borges</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title='23 de Outubro às 11:08' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no como estudo para aumentar minhas habilidades. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=''>jane.design/doctorcare</a></p>

                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#DEV</a>{' '}
                    <a href=''>#WebDev</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}