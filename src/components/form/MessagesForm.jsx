const Messages = ({ msg, BgColor }) => {
  let styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '50px',
    padding: '3px',
    margin: '5px',
    color: '#fffdfd',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: BgColor,
  };

  return <div style={styles}>{msg}</div>;
};

export default Messages;
