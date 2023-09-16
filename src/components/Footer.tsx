import type { Component } from 'solid-js'

const Footer: Component = () => {
  return (
    <footer>
      <a
        rel="license"
        href="https://github.com/penjj/penjj.github.io/blob/main/CC-BY-NC-SA-4.0"
      >
        <img
          alt="知识共享许可协议"
          style="border-width: 0"
          src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
        />
      </a>
      <br />
      本站采用
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      >
        知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
      </a>
      进行许可。
    </footer>
  )
}

export { Footer as default }
