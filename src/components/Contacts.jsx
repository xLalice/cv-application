export default function Contacts(props) {
    return (
      <form className="padding">
        <h1>Contacts</h1>
        <label>
          Name:
          <input
            name="name"
            value={props.data.name}
            onChange={(e) => props.onChange(e)}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={props.data.email}
            onChange={(e) => props.onChange(e)}
          />
        </label>
        <label name="number">
          Cellphone #
          <input
            name="number"
            value={props.data.number}
            onChange={(e) => props.onChange(e)}
          />
        </label>
        <label>
          City:
          <input
            name="city"
            value={props.data.city}
            onChange={(e) => props.onChange(e)}
          />
        </label>
        <label>
          Portfolio/Website
          <input
            name="portfolio"
            value={props.data.portfolio}
            onChange={(e) => props.onChange(e)}
          />
        </label>
      </form>
    );
  }
  