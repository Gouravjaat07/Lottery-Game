import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy Ticket</button>
            <h2>{isWinning && "Congratulations, you won prize 🎉!"}</h2>
        </>
        
    );
}