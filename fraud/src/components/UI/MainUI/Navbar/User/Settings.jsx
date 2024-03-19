
    const Settings = () => {
      return (
        <div className="settings-container">
          <h1>Settings</h1>
          <div className="settings-sections">
            <section className="setting">
              <h2>Profile</h2>
              <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <button type="submit">Save</button>
              </form>
            </section>
            <section className="setting">
              <h2>Notifications</h2>
              <ul>
                <li>
                  <label htmlFor="notify-emails">
                    <input type="checkbox" id="notify-emails" name="notify-emails" />
                    Receive email notifications
                  </label>
                </li>
                <li>
                  <label htmlFor="notify-desktop">
                    <input type="checkbox" id="notify-desktop" name="notify-desktop" />
                    Receive desktop notifications
                  </label>
                </li>
              </ul>
            </section>
            <section className="setting">
              <h2>Security</h2>
              <p>Change password or enable two-factor authentication.</p>
              <button>Manage Security</button>
            </section>
          </div>
        </div>
      );
    };
    

export default Settings