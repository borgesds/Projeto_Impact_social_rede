import { Header } from './components/Header'
import { Post } from './post'

import './styles.css'

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="André Borges"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima temporibus in libero officiis fugiat dolorem incidunt iste ad reiciendis a quae maiores maxime pariatur, quidem dolor facilis molestiae vel! Impedit?"
      />

      <Post
        author="Igor Brendon"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima temporibus in libero officiis fugiat dolorem incidunt iste ad reiciendis a quae maiores maxime pariatur, quidem dolor facilis molestiae vel! Impedit?"
      />
    </div>
  )
}
