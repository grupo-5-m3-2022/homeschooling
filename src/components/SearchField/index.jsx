import { AiOutlineSearch } from "react-icons/ai"
import { SearchInputDiv, SearchSelectStyle, SearchInputStyle } from "./styles"

export default function SearchInput({placeholder, options}) {
    return (
        <SearchInputDiv>
            <AiOutlineSearch />
            {
                options ? 
                    <SearchSelectStyle>
                        {
                            Array.isArray(options) && options.map(({valor, texto}, index) => (
                                <option key={index} value={valor}>{texto}</option>
                            ))
                        }
                    </SearchSelectStyle> :
                    <SearchInputStyle placeholder={placeholder} type="text" />
            }
        </SearchInputDiv>
    )
}