const JoinUs = () => {
  return (
    <div>
      <h1>Join the Federation</h1>
      <p>
        Become a part of the Cameroon Chess Federation family and contribute to
        the growth of chess in Cameroon.
      </p>
      <form>
        <label>
          Full Name: <input type="text" name="fullname" />
        </label>
        <br />
        <label>
          Email: <input type="email" name="email" />
        </label>
        <br />
        <label>
          Why do you want to join? <textarea name="reason"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JoinUs;
