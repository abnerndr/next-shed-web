import ButtonMain from '@/components/common/ButtonMain';
import { ArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react';

function SelectModal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Planos para genrenciar sua empresa</h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>
                            Um plano de agendamento comercial é uma solução eficiente e organizada para empresas gerenciarem seus compromissos, horários e disponibilidades de forma estruturada.
                        </p>
                    </div>
                    <div className="mt-5">
                        <button
                            onClick={openModal}
                            data-modal-target="select-modal"
                            data-modal-toggle="select-modal"
                            className="block text-white bg-gray-900 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            type="button"
                        >
                            Escolha seu Plano
                        </button>

                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    id="select-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="overflow-y-auto overflow-x-hidden top-0 right-0 left-20 z-50  items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Opções de Planos
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeModal}
                                    data-modal-toggle="select-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <p className="text-gray-500 dark:text-gray-400 mb-4">Selecione o melhor plano para sua empresa</p>
                                <ul className="space-y-4 mb-4">
                                    <li>
                                        <input type="radio" id="job-1" name="job" value="job-1" className="hidden peer" required />
                                        <label
                                            htmlFor="job-1"
                                            className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-gray-800 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
                                        >
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Plano basico</div>
                                                <li className="w-full text-gray-500 dark:text-gray-400">agendamento</li>
                                                <li className="w-full text-gray-500 dark:text-gray-400">gerenciamento</li>
                                                <li className="w-full text-gray-500 dark:text-gray-400">mais somente um administrador</li>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="job-2" name="job" value="job-2" className="hidden peer" />
                                        <label
                                            htmlFor="job-2"
                                            className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-gray-800 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
                                        >
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Plano administrador</div>
                                                <li className="w-full text-gray-500 dark:text-gray-400">agendamento</li>
                                                <li className="w-full text-gray-500 dark:text-gray-400">gerenciamento</li>
                                                <li className="w-full text-gray-500 dark:text-gray-400">mais de um administrador</li>
                                            </div>

                                        </label>
                                    </li>
                                </ul>
                                <div className="w-[full]">
                                    <ButtonMain className="text-sm pr-2 " variant={"default"}>
                                        próximo <ArrowRightIcon className="w-4 h-4 ml-1" />
                                    </ButtonMain>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SelectModal;