import React from 'react';
import PropTypes from 'prop-types';

            function Title() {
                return (
                    <div className="title">
                        <h1>CV Application</h1>
                    </div>
                )
            }

            function InfoTitle(props) {
                return (
                    <h2 className="info-title">{props.title}</h2>
                )
            }

            function InfoInput(props) {
                return (
                    <input 
                        className="InfoInput" 
                        id={props.id} 
                        value={props.value}
                        onChange={props.onChange}
                        type={props.type}
                        placeholder={props.placeholder} 
                    />
                )
            }

            InfoTitle.propTypes = {
                title: PropTypes.string
            }

            InfoInput.propTypes = {
                placeholder: PropTypes.string,
                type: PropTypes.string,
                id: PropTypes.string,
                value: PropTypes.string,
                onChange: PropTypes.string
            }

export {
    Title,
    InfoTitle,
    InfoInput 
}