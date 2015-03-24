package jp.gr.java_conf.hangedman.seat

import org.scalatra._
import scalate.ScalateSupport

class ZasekihyoServlet extends ZasekihyoStack {

  get("/") {
    <html>
      <body>
        <h1>Hello, world!</h1>
        Say <a href="hello-scalate">hello to Scalate</a>.
      </body>
    </html>
  }

}
