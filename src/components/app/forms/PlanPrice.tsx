import ButtonMain from '@/components/common/ButtonMain';
import { ArrowRightIcon, CheckIcon, CheckSquareIcon, Plus, XIcon } from 'lucide-react';
import React, { useState } from 'react';

function SelectModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <div className="bg-white shadow sm:rounded-lg">

        <div className="relative px-0  p-4 w-full max-w-md max-h-full">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Opções de Planos
            </h3>
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
                  <div className="w-full text-lg font-semibold">
                    Plano básico
                    <ul>
                      <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                        <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> agendamento
                      </li>
                      <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                        <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> gerenciamento
                      </li>
                      <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                        <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> um administrador
                      </li>
                    </ul>
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
                    <div className="w-full text-lg font-semibold">
                      Plano administrador
                      <ul>
                        <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                          <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> agendamento
                        </li>
                        <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                          <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> gerenciamento
                        </li>
                        <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                          <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> mais de um administrador
                        </li>
                      </ul>
                    </div>
                  </div>
                </label>
              </li>
            </ul>
            <div className="w-[full]">
              <ButtonMain className="text-sm pr-2 " variant={"default"}>
                próximo <ArrowRightIcon className="w-4 h-4 ml-1" />
              </ButtonMain>
            </div>
            <div className="w-[full] pt-2">
              <ButtonMain className="text-sm pr-2 w-full" variant={"outline"} size={'default'} onClick={toggleModal}>
                mais informações  <Plus className="w-4 h-4 ml-1" />
              </ButtonMain>
            </div>
          </div>
        </div>
      </div>
      <div>
        {modalOpen && (
          <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-2xl">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Informativo dos Planos
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleModal}
                  >
                    <XIcon />
                  </button>
                </div>
                <ul className="bg-white shadow sm:rounded-lg">
                  <li>
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">Plano Básico</h3>

                      <ul className='pt-2'>
                        <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                          <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> agendamento
                        </li>
                        <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                          <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> gerenciamento
                        </li>
                        <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                          <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> um administrador
                        </li>
                      </ul>
                    </div>
                  </li>
                  <hr className="border-gray-200" />
                  <li>
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">Plano Pro</h3>
                      <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <ul>
                          <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                            <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> agendamento
                          </li>
                          <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                            <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> gerenciamento
                          </li>
                          <li className="flex text-sm font-normal items-center w-full text-gray-500 dark:text-gray-400">
                            <CheckIcon className="w-4 h-4 mr-2 text-emerald-600" /> mais de um administrador
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectModal;
