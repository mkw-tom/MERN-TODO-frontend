import { FiDelete, FiEdit } from 'react-icons/fi';
import './App.css';
import { CgAdd } from 'react-icons/cg';
import { LuSwatchBook } from "react-icons/lu";
import { FaPen } from "react-icons/fa";

function App() {
  const array = [
    { title: 'うんち', memo: 'バナナうんちをしました' },
    { title: 'うんち１', memo: 'バナナうんちをしました' },
    { title: 'うんち２', memo: 'バナナうんちをしました' },
    { title: 'うんち３', memo: 'バナナうんちをしました' },
  ];
  return (
    <div className="w-full h-screen flex items-start justify-around">
      <div className="w-1/3 h-screen text-lg py-5 px-10 border-r-2 border-info">
        <h1 className="font-bold mb-10 flex items-center gap-1 text-center mx-auto w-28 "><FaPen></FaPen><span>メモ追加</span></h1>
        <form className="flex flex-col gap-5 items-center ">
          <input
            className="input input-info w-[300px]"
            placeholder="タイトル"
          />
          <textarea
            className="textarea textarea-info w-[300px] h-[400px]"
            placeholder="メモ"
          ></textarea>
          <button className="btn btn-info w-[300px] shadow-xl"><CgAdd />追加</button>
        </form>
      </div>
      <div className="w-2/3 flex flex-col p-5">
        <h1 className="font-bold text-center mb-10 flex items-center mx-auto gap-1"><LuSwatchBook></LuSwatchBook><span>メモ一覧</span></h1>
        <input
          type="text"
          className="input input-info w-[300px] mb-10"
          placeholder="検索"
        />

        <div className="grid grid-cols-2 gap-3">
          {array.map((e) => (
            <div className="flex  items-center justify-between border-2 border-info py-2 px-3 rounded-lg">
              <h3 className='w-9/12 text-center'>{e.title}</h3>
              <div className='flex w-3/12'>
                <div className="text-center ">
                  <div
                    className="btn hover:text-info"
                    onClick={() => {
                      const modal = document.getElementById(
                        'my_modal_5',
                      ) as HTMLDialogElement | null;
                      if (modal) {
                        modal.showModal();
                      }
                    }}
                  >
                    開く
                  </div>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle border-2 border-info"
                  >
                    <div className="modal-box border border-info">
                      <h3 className="font-bold text-lg">{e.title}</h3>
                      <p className="py-4">{e.memo}</p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-info">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <button className="text-sky-500 ml-auto mr-3">
                  <FiEdit />
                </button>
                <button className="text-red-500 ml-auto ">
                  <FiDelete></FiDelete>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
