import Rule from './rule';

export default class Integer extends Rule {
    /**
     * @param {*} value
     * @param {Array} ruleParams
     * @param {Object} context
     */
    validate(value, ruleParams, context) {
        return value => parseInt(value) === value;
    
};