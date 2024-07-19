import { useState } from 'react'

export default function Language() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  const languages = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
  ]

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedLanguage || 'Select an language'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((language) => (
            <li key={language.id}>
              <button onClick={() => handleLanguageClick(language.name)}>
                {language.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
