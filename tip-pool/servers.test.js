describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty inputs', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #serverTable on updateServerTable()', function () {

    submitServerInfo();
    updateServerTable();

    let currentTDList = document.querySelectorAll('#serverTable tbody tr td');
    expect(currentTDList.length).toEqual(2);
    expect(currentTDList[0].innerText).toEqual('Alice');
    expect(currentTDList[1].innerText).toEqual('$0.00');
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = ''; // Clean up the server table
  });
});