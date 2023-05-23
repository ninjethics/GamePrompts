import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import WidgetBot from "@widgetbot/react-embed";


export const metadata = {
  title: "GamePrompts",
  description: "Find & Share Ideas!",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <WidgetBot
            server="1110563193010520164"
            channel="1110563193648074784"
          />
        </main>
      </Provider>
     
    </body>
  </html>
);

export default RootLayout;