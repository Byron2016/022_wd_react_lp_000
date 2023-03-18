export const Test = () => {
  console.log(import.meta.env.VITE_SOME_KEY); // 123
  console.log(import.meta.env.DB_PASSWORD); // undefined
  console.log(import.meta.env.REACT_APP_NOT_SECRET_CODE); // undefined

  const a_var = `${process.env.REACT_APP_MAILCHIMP_URL}`;
  console.log(a_var);

  return (
    // <div>
    //   <small>
    //     You are running this application in <b>{process.env.NODE_ENV}</b> mode.
    //   </small>
    //   <form>
    //     <input
    //       type="hidden"
    //       defaultValue={process.env.REACT_APP_NOT_SECRET_CODE}
    //     />
    //   </form>
    // </div>
    <div>
      <small>
        You are running this application in mode.: <b>{process.env.NODE_ENV}</b>
      </small>

      <div>
        <small>
          REACT_APP_NOT_SECRET_CODE: 
          <b>{process.env.REACT_APP_MAILCHIMP_URL}</b>
        </small>
      </div>
    </div>
  );
};
