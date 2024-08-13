import { useState } from "react"
import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from "../components"

interface Message {
  text: string;
  isGpt: boolean;
}



export const ChatTemplate = () => {

  const [isLoading, setIsLoading] = useState(false); 
  const [messages, setMessages] = useState<Message[]>([])

  const handlePost = async( text: string ) => {

    setIsLoading(true);
    setMessages( (prev) => [...prev, { text: text, isGpt: false }] );

    // TODO: UseCase

    setIsLoading(false);

    // TODO: Añadir mensaje isGpt en True


  }



  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">

          {/* Bienvenida */}
          <GptMessage text="Hola, puedes escribir tu texto y te ayudo con la ortografía" />

          {
            messages.map((message, i) => (
              message.isGpt
                ? (
                  <GptMessage key={i} text="Esto es de openAi" />
                )
                : (
                  <MyMessage key={i} text={message.text} />
                )

            ))
          }
 

          {
            isLoading && (
              <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
              </div>
            )
          }
          



        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe aqui"
        disableCorrections
      />

    </div>
  )
}
