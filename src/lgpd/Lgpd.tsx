import React, { useEffect, useState } from 'react';
import Modal from './ModalPolicy';
import { last_cookie_policy } from './contants';
import { format } from 'date-fns';




const Lgpd = () => {



    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(true);
    const [agreementDate, setAgreementDate] = useState(new Date());
   

    useEffect(() => {
        // Perform localStorage action
        // Perform localStorage action
        const lgpd = localStorage.getItem('cookies');
        const date = localStorage.getItem('agreementDate');
        setCookiesAccepted(lgpd !== null && lgpd == 'accepted');
        setAgreementDate(date !== null ? new Date(date) : new Date(0));

    }, [])

    useEffect(() => {
        localStorage.setItem("agreementDate", format(agreementDate, 'yyyy-MM-dd') );
    },[agreementDate])


    const aceitar = () => {
        setCookiesAccepted(true);
        setAgreementDate(new Date(last_cookie_policy));
        localStorage.setItem("cookies", "accepted");
        // localStorage.setItem("agreementDate", last_cookie_policy);
        console.log("cookies aceitos")
        // window.location.reload();
    }
    const regulamento = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    const verificarCookiesNaoAceitos = () => {
        let date1 = new Date(agreementDate);
        let date2 = new Date(last_cookie_policy)

        return !cookiesAccepted || date1 < date2
    }


    return (<>
        <Modal isOpen={modalIsOpen} />

        {verificarCookiesNaoAceitos() ? (
            <div className="alert fixed bottom-10 left-0 z-40 opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Utilizamos cookies e outras tecnologias pra melhorar a sua experiência no nosso site.</span>
                <div>
                    <button className="btn btn-sm" onClick={() => { 
                        if (document) {
                            (document.getElementById('modal_policy') as HTMLFormElement).showModal();
                        }}}>Regulamento</button>
                    <button className="btn btn-sm btn-primary" onClick={() => aceitar()}>Accept</button>
                </div>
            </div>
        ) : (<></>)}
    </>
    );
};




export default Lgpd;
