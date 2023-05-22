console.log('Injecting into CVA Website');

chrome.storage.sync.get(["link"], (result) => {
    const link = result.link;
    if (link) {
      const style = document.createElement("style");
      style.innerHTML = `
      :root, .app-light-theme, .app-dark-theme, lib-assessment-template.template-theme{
        --card-layout-background: url('${link}')!important; /* Change Link to your favorite image! */
        --card-background: transparent!important;
        
        /* Test Features */
        
        }
      `;
      document.head.appendChild(style);
    }
  });