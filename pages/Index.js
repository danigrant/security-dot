class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Create Your Security Report For Vendor Assesments</h1>
        <p>Fill out the security questions below and get your automatic security dot page.</p>
        <form>
          <h2>Metadata</h2>
          <label>The name of the application:</label>
          <input type="text" placeholder="Company LLC" />
          <label></label>
          <h2>Vulnerability Reporting and Management</h2>
          <label>Do you have an easily discoverable way for external researchers to report security vulnerabilities in your systems?</label>
          <div>
            <input type="checkbox" id="checkbox-reporting-yes" />
            <label for="checkbox-reporting-yes"> Yes, we have a published security email contact, or we provide another way for users to report security issues. Incoming reports are timely reviewed and triaged.</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox-reporting-no" />
            <label for="checkbox-reporting-no"> No, we do not currently offer a way to report security vulnerabilities for priority handling.</label>
          </div>
          <label>Optional explanation for the above answer:</label>
          <textarea></textarea>
          <h2>HTTPS and Mixed-Content Risks</h2>
          <label>Select the option that best describes your web application:</label>
          <div>
            <input type="checkbox" id="checkbox-https-only" />
            <label for="checkbox-https-only"> The web application is reachable exclusively over HTTPS. Even if the user manually edits the URL to start with http://, it won't work or it will redirect to https://.</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox-https-flex" />
            <label for="checkbox-https-flex"> The web application is flexible — users can reach it over HTTP or over HTTPS.</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox-https-none" />
            <label for="checkbox-https-none"> The web application supports HTTP only, and can't be reached over HTTPS even if you edit the URL.</label>
          </div>
          <label>Optional explanation for the above answer:</label>
          <textarea></textarea>
          <h2>Security Controls</h2>
          <label>Select the controls you currently maintain as elements of your information security and privacy program:</label>
          <div>
            <input type="checkbox" id="checkbox-external-policy" />
            <label for="checkbox-external-policy">An external policy or notice to the public, users, or customers, describing how you protect the security and privacy of data</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox-internal-policy" />
            <label for="checkbox-internal-policy">Written internal policies, guidelines, and documented practices for the safe handling and protection of data</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox-internal-audits" />
            <label for="checkbox-internal-audits">Internal audits of the security and privacy program</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox-third-party-audits" />
            <label for="checkbox-third-party-audits">Third-party audits of the security and privacy program</label>
          </div>
          <div>
            <input type="checkbox" id="checklist-vendor-process" />
            <label for="checklist-vendor-process">A process to ensure that your service providers and subcontractors are capable of taking appropriate steps to protect sensitive data and systems</label>
          </div>
          <div>
            <input type="checkbox" id="checklist-incident-process" />
            <label for="checklist-incident-process">Processes and procedures to ensure that security incidents are discovered in a timely manner and dealt with effectively</label>
          </div>
          <div>
            <input type="checkbox" id="checklist-change-management" />
            <label for="checklist-change-management">A change management process to ensure that all changes to networks, systems, and processes are appropriately reviewed</label>
          </div>
          <label>Optional additional explanation for the above answer:</label>
          <textarea></textarea>
          <button type="submit">Generate Report</button>
        </form>
        <style jsx>{`
          .container {
            width: 95%;
            max-width: 800px;
            padding: 15px;
            margin: 0 auto;
          }
          textarea, input[type="text"] {
            display: block;
            margin-top: 15px;
            width: 100%;
            outline: none;
            padding: 15px;
            font-size: inherit;
          }
          div {
            margin-top: 15px;
            margin-bottom: 15px;
          }
          button {
            outline: none;
            padding: 5px;
            font-size: 1rem;
            border-radius: 5px;
            margin-top: 15px;
            margin-bottom: 15px;
            font-weight: bold;
            background: #dedede;
          }
        `}</style>
        <style global>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 1rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Index
