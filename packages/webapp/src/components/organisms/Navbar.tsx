import Avatar from '@/components/atoms/Avatar'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100" data-component_name="Navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Food Composer</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
          <Avatar />
        </button>
      </div>
    </div>
  )
}

export default Navbar
