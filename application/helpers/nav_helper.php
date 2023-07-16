<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('load_nav'))
{
	function load_nav()
	{
		$ci = & get_instance();

		$sessionLang = $ci->session->userdata('PREFLANG') ?? 'ro';

		$navPath  = APPPATH . 'views/modules/' . $sessionLang . "/nav.php";

		//check if all language files are present
		if (file_exists($navPath) ) {
			$ci->load->view('modules/' . $sessionLang . '/nav');
		} else {
			$ci->load->view('modules/ro/nav');
		}
	}
}
