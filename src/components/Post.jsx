import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Cpu } from 'phosphor-react'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'


export function Post({ author, publishedAt, content }) {
    // criar um estado
    // 1 posição armazena(comments)
    // 2 posição altera o valor dos comentários(setComments)
    // o 2 tanto altera quanto avisa que fez oa alteração
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])

    // aqui armazena novos comentários
    const [newCommentText, setNewCommentText] = useState('')


    // formatar data
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

    // data relativa do post
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    // criar novo comentário
    function handleCreateNewComment() {
        event.preventDefault()

        // mandar o comentario para dentro useState
        // ...comments pega tudo que existe armazenado
        setComments([...comments, newCommentText])

        // manter o comentario vazio depois que enviar
        setNewCommentText('')

    }

    function handleNewCommentChange() {
        // me retorna o que e salva o valor digitado
        setNewCommentText(event.target.value)
    }


    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar src={author.avataUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>
            {/* listar os comentários */}        
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment}/>
                }
                )}
            </div>

        </article>
    )
}