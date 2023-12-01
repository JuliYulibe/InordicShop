
/**
 * Компонент меню
 * @prop menu - массив с элементами меню
 * @returns component
 */

export function Theme({setTheme, text}){
   return (
    <div>
                    <input 
                        type="radio" 
                        id="light" name="theme" 
                        value="light" 
                        defaultChecked='true'
                        onClick={() => setTheme('light')}
                    />
                    <label for="light">{text.Light}</label>
                    <input 
                        type="radio" 
                        id="dark" name="theme" 
                        value="dark"
                        onClick={() => setTheme('dark')}
                    />
                    <label for="dark">{text.Dark}</label>
                </div>
       
   ) 
}