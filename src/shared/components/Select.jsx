// Componente Select

export default function Select({
    label,
    name,
    value,
    error,
    onChange,
    htmlFor,
    options = [],
}){
    return (
        <div>
            {/* Label solo se muestra si es truthu un uno logico */}
            {label && (
                <label 
                    htmlFor={htmlFor}
                    className="
                        block
                        text-caption
                        text-secondary
                        "
                >
                    {label}
                </label>
            )}

            {/* Select */}
            <select
                value={value}
                onChange={onChange}
                name={name}
                id="htmlFor"
                className="
                    w-80
                    h-12
                    rounded-md
                    border
                    px-4

                    hover:border
                    hover:border-2
                    hover:border-focus-border
                "
            >
                <option value="">Seleccione una opcion</option>

                {options.map((option) => (
                    <option 
                        key={option.value} 
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}

            </select>

            {/* Feedback */}
            {error && (
                <p className="text-caption text-red-800 place-self-start mt-1">
                    {error}
                </p>
            )}
        </div>
    );
}