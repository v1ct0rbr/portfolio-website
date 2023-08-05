import React, { Component, useEffect, useState } from 'react';
import './Lgpd.css';
import Modal from '../components/Modal';
import { Button, ButtonGroup, Card, CardBody } from '@nextui-org/react';



const Lgpd = () => {



    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(true);

    useEffect(() => {
        // Perform localStorage action
        const lgpd = localStorage.getItem('cookies');
        setCookiesAccepted(lgpd !== null && lgpd == 'accepted');

    }, [])


    const aceitar = () => {
        setCookiesAccepted(true);
        localStorage.setItem("cookies", "accepted");
        console.log("cookies aceitos")
        // window.location.reload();
    }
    const regulamento = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }


    return (<>
        <Modal isOpen={modalIsOpen} onClose={closeModal} />
        {/* <div className="lgpd">
            <div className="lgpd-text" >
                <span>Utilizamos cookies e outras tecnologias pra melhorar a sua experiência no nosso site.</span>
            </div>

            <button className="lgpd-regulamento" onClick={() => regulamento()}>
                <span>Ler regulamento</span>
            </button>
            <button className="lgpd-aceitar" onClick={() => aceitar()} >
                <span>Aceitar</span>
            </button>
        </div> */}
        {!cookiesAccepted ? (<Card className='lgpd mx-auto' radius='none'>
            <CardBody>
                <div className="flex items-center justify-between">
                    <p>Utilizamos cookies e outras tecnologias pra melhorar a sua experiência no nosso site.</p>

                    <ButtonGroup>
                        <Button color="default" onClick={() => regulamento()}>
                            Regulamento
                        </Button>

                        <Button color="success" onClick={() => aceitar()} >
                            <span>Aceitar</span>
                        </Button>
                    </ButtonGroup>
                </div>

            </CardBody>
        </Card>) : (<></>)}


    </>
    );
};





/*
    render() {

        if (typeof window !== 'undefined') {
            const lgpd = localStorage.getItem("cookies");
            console.log('Aceitou Lgpd:' + lgpd);

            if (lgpd !== null) {
                return (
                    <React.Fragment>
                    </React.Fragment>
                );
            }else
            return (
                <div>
                    {this.state.exibirLgpd}
                </div>
            );
        } else {
            return (
                <React.Fragment>
               </React.Fragment>
            );
        }


        //localStorage.removeItem("cookies");
        //window.location.reload();

    }
    */


export default Lgpd;
