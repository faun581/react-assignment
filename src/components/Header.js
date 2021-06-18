import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
  
  return (
    <header className='header'>
      <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Hide' : 'Show To do list'}
          onClick={onAdd}
        />
    </header>   
  )
}

export default Header