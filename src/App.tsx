import './App.css';

function App() {
  const array = [
    { title: 'うんち', memo: 'バナナうんちをしました' },
    { title: 'うんち', memo: 'バナナうんちをしました' },
    { title: 'うんち', memo: 'バナナうんちをしました' },
    { title: 'うんち', memo: 'バナナうんちをしました' },
  ];
  return (
    <div className="w-full h-screen flex items-start justify-around">
      <div className="w-1/3 h-screen text-lg py-5 px-10 border-r-2 border-info">
        <h1 className="font-bold  text-center mb-10">メモ追加</h1>
        <form className="flex flex-col gap-5 items-center ">
          <input
            className="input input-info w-[300px]"
            placeholder="タイトル"
          />
          <textarea
            className="textarea textarea-info w-[300px] h-[400px]"
            placeholder="メモ"
          ></textarea>
          <button className="btn btn-info w-[300px] shadow-xl">追加</button>
        </form>
      </div>
      <div className="w-2/3 flex flex-col p-5">
        <h1 className="font-bold text-center mb-10">メモ一覧</h1>
        <input
          type="text"
          className="input input-info w-[300px] mb-10"
          placeholder="検索"
        />

        <div className="grid grid-cols-2 gap-3">
          {array.map((e) => (
            <div className="card ">
              <button
                className="btn btn-outline btn-info"
                onClick={() => {
                  const modal = document.getElementById(
                    'my_modal_5',
                  ) as HTMLDialogElement | null;
                  if (modal) {
                    modal.showModal();
                  }
                }}
              >
                {e.title}
              </button>
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
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
