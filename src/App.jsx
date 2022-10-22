import { Header } from './components/Header'
import { Post } from './post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        {/* asiderbar */}
        
        <Sidebar />

        {/* posts */}
        <main>
          <Post
          author="André Borges"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima temporibus in libero officiis fugiat dolorem incidunt iste ad reiciendis a quae maiores maxime pariatur, quidem dolor facilis molestiae vel! Impedit?"
        />

        <Post
          author="Igor Brendon"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima temporibus in libero officiis fugiat dolorem incidunt iste ad reiciendis a quae maiores maxime pariatur, quidem dolor facilis molestiae vel! Impedit?"
        />
        </main>

      </div>
    </div>
  )
}
