<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Todos_model extends CI_Model
{

    function getAllTodos()
    {
        $this->load->database();
        // $otherdb = $this->load->database('library', TRUE);
        $response = array();

        // Select record
        $this->db->select('*');
        $q = $this->db->get('todos');
        $response = $q->result_array();

        return $response;
    }
}
