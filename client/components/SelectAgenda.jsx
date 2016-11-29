import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export const SelectAgendaComponent = ({ agendas, onChange, currentAgendaId }) => (
    <select onChange={onChange} value={currentAgendaId}>
        <option></option>
        {agendas.map((agenda) => (
            <option
                key={agenda._id}
                value={agenda._id}>{agenda.name}
            </option>
        ))}
    </select>
)

SelectAgendaComponent.propTypes = {
    agendas: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    currentAgendaId: PropTypes.string,
}

const mapStateToProps = (state) => ({
    currentAgenda: state.planning.currentAgendaId,
    agendas: state.planning.agendas,
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => (dispatch(actions.selectAgenda(event.target.value)))
})

export const SelectAgenda = connect(mapStateToProps, mapDispatchToProps)(SelectAgendaComponent)
