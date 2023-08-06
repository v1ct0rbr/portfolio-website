import { useRef, useState, Fragment } from 'react';
import HTMLString from 'react-html-string';
import policy from './policy';




interface UseDisclosureProps {
    isOpen?: boolean;
    setOpen?: void;
    policy?: JSX.Element;

}

export default function App(props: UseDisclosureProps) {
    const [open, setOpen] = useState(props.isOpen);
    return (
        <>

            <dialog id="modal_policy" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Cookie Policy</h3>
                    <div className="py-4">
                        <HTMLString html={policy} />
                    </div>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
