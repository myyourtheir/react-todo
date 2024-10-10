import './CustomCheckbox.css'
function CustomCheckbox({ checked, ...props }: { checked: boolean } & React.HTMLAttributes<HTMLDivElement>) {

	return (
		<div className='checkBox_container' {...props}>
			{checked &&
				<span>&#10003;</span>
			}
		</div>
	)
}

export default CustomCheckbox